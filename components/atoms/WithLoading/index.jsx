import React from 'react';

import Loader from 'components/atoms/Loader';

function withLoading(Component) {
	return ({ loading, ...props }) =>
		loading ? <Loader /> : <Component {...props} />;
}

export default withLoading;
