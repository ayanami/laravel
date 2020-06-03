import React, { Component, Suspense } from 'react';
import { connect } from 'react-redux';
import { ErrorPage } from '../../components/error/error.page.component';
import { Wordpress } from '../../components/wordpress/wordpress.component';
import { get } from '../../utils/axios.utils';

class WordpressContainer extends Component {
    render() {
        const publisher = get('/api/wordpress/' + this.props.match.params.id);
        return (
            <Suspense fallback={<p>Loading...</p>}>
                <ErrorPage>
                    <Wordpress {...this.props} publisher={publisher} />
                </ErrorPage>
            </Suspense>
        );
    }
}

export default connect()(WordpressContainer);