const gulp = require( 'gulp' );
const backstopjs = require( 'backstopjs' );

const backstopConfig = {
	config: 'backstop.json',
};

gulp.task( 'reference', () => backstopjs( 'reference', backstopConfig ) );

gulp.task( 'test', () => backstopjs( 'test', backstopConfig ) );

gulp.task( 'default', ['test'] );
