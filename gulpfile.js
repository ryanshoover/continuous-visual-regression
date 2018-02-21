import gulp from 'gulp';
import backstopjs from 'backstopjs';

const backstopConfig = {
	config: 'backstop.json',
};

// Run visual regression tests for both mobile and Desktop
export const backstopTest = () => backstopjs( 'test', backstopConfig );

gulp.task( 'test', backstopTest );
