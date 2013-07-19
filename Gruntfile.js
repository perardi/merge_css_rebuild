/*global module:false*/
module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    // Task configuration.
	'ftp-deploy': {
	  build: {
	    auth: {
	      host: 'ftp.ascedia.com',
	      port: 21,
	      authKey: 'key1'
	    },
	    src: 'media/css',
	    dest: '/merge.com/Merge2012/media/css',
	    exclusions: ['media/**/.DS_Store', 'media/**/Thumbs.db', 'dist/tmp']
	  }
	},
	
      gruntfile: {
        src: 'Gruntfile.js'
      }
 
  });

  // These plugins provide necessary tasks.
  grunt.loadNpmTasks('grunt-ftp-deploy');

  // Default task.
  grunt.registerTask('default', ['ftp-deploy']);

};
