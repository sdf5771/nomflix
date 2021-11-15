import { moviesApi, tvApi } from 'api';
import factoryWithThrowingShims from 'prop-types/factoryWithThrowingShims';
import React from 'react';
import DetailPresenter from './DetailPresenter';

export default class extends React.Component{
    constructor(props){
        const {location : { pathname }} = props;
        super(props);
        this.state = {
            result : null,
            loading : true,
            error : null,
            isMovie : pathname.includes("/movie/")
        };
    }
    
    async componentDidMount() {
            const {
                match: {
                    params: { id }
                },
                history : { push }
            } = this.props;
            const { isMovie } = this.state;
            const parsedID =  parseInt(id);
            if (isNaN(parsedID)){
                return push("/"); // if id value is not number go back home
            }

            let result = null;

            try {
                if(isMovie){
                    ({ data: result } = await moviesApi.movieDetail(parsedID));
                } else {
                    ({data: result } = await tvApi.showDetail(parsedID));
                }


            } catch {

                this.setState({ error: "Can't find anything." });

            } finally {

                this.setState({ loading : false, result });

            }
    }
    
    render() {
        console.log(this.state);
        const { result, loading, error } = this.state;
        return (
        <DetailPresenter 
            result={result}
            loading={loading}
            error={error}
        />
        );
    }
}