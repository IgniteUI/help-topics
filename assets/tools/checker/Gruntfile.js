module.exports = function(grunt) {

  grunt.initConfig({
    verify: {
      options: {
        rootPath: "../../../topics/",
        images: [".png", ".gif", ".jpg"],        
        topics: [".md"],
        ignore: [".stub", ".link"]
      }
    },
    watch: {
      files: [
        "../../../topics/**/*.md",
        "../../../topics/**/*.jpg",
        "../../../topics/**/*.gif"
      ],
      tasks: ['verify'],
      options: {
        spawn: false,
        interval: 5007
      }
    }
  });

  grunt.file.defaultEncoding = 'utf8';
  grunt.loadNpmTasks('grunt-contrib-watch');

  grunt.registerTask('verify', 'Checks for duplicate links/image names as well as broken image paths in content.', function() {
      var config = this.options(),
          path = require('path'),
		  imagePaths = 0,
          images = {}, topics = {};

      grunt.file.recurse(config.rootPath, callback);

      console.log("Images (unique): ", Object.keys(images).length);
      console.log("Topics (unique): ", Object.keys(topics).length);
	  console.log("Image paths checked: ", imagePaths);

      function callback(abspath, rootdir, subdir, filename) {
		filename = filename.toLowerCase();
        if (config.images.indexOf(path.extname(filename)) >= 0) {
            var parentDir = path.normalize(subdir).split(path.sep).pop();
            // images:
            if (images.hasOwnProperty(parentDir + "_" +  filename)){
              grunt.fail.fatal('Duplicate image: ' + abspath + " of :" + images[parentDir + "_" +  filename]);
            }
            images[parentDir + "_" +  filename] = abspath;
        }
        else if (config.ignore.indexOf(path.extname(filename)) == -1) {
            // topics: lower-dashed; strip ext, ordering
            var link = filename.replace(path.extname(filename), "");
            link = /^(?:(?:\d{1,2}_)|~)?(.*)/.exec(link)[1];
            link = link.replace(/_/g,'-').replace(/\s/g,'-');
			
			checkImagePaths(abspath, rootdir, subdir);
			
            if (topics.hasOwnProperty(link)){
              grunt.fail.fatal('Duplicate link: ' + abspath + " of :" + topics[link]);
            }
            topics[link] = abspath;
        }
      };
	  	
	  function checkImagePaths(abspath, rootdir, subdir) {
		  var match, 
				mdImageMatcher = /\!\[[^\]]*\]\((?!\s*http)([^"'\)]*images\/[^"'\)]+)\s*(?:["][^"\)]+["])?\s*\)/ig,
				htmlImageMatcher = /\<img.*?src=["'](?!\s*http)([^"']*images\/[^"'\/]+)["']/ig,
			    src = grunt.file.read(abspath);
			while (match =  mdImageMatcher.exec(src)) {
				var imagePath = decodeURIComponent(match[1]).trim().toLowerCase();
				imagePath = path.join(path.resolve(rootdir), subdir || "", imagePath);
				if (!grunt.file.exists(imagePath)) {
					grunt.fail.warn("Image not found: " + imagePath + " in: " + abspath);
				}
				imagePaths++
			}
			while (match =  htmlImageMatcher.exec(src)) {
				var imagePath = decodeURIComponent(match[1]).trim().toLowerCase();
				imagePath = path.join(path.resolve(rootdir), subdir || "", imagePath);
				if (!grunt.file.exists(imagePath)) {
					grunt.fail.warn("Image not found: " + imagePath + " in: " + abspath);
				}
				imagePaths++
			}
	  }
  });
};