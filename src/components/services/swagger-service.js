import React, {Component} from 'react';

class SwaggerService extends Component {
    constructor(props) {
        super(props);
        this.state = {
            error: null,
            isLoaded: false,
            data: []
        };
    }

    apiBase = 'https://reactjs-cdp.herokuapp.com/movies'

    componentDidMount() {
        fetch(this.apiBase)
            .then(res => res.json())
            .then(
                (result) => {
                    this.setState({
                        isLoaded: true,
                        items: result.data
                    });
                },
                (error) => {
                    this.setState({
                        isLoaded: true,
                        error
                    });
                }
            )
    }

    render() {
        const {error, isLoaded, items} = this.state;

        if (error) {
            return <div>Error: {error.message}</div>;
        } if (!isLoaded) {
            return <div>Loading....</div>
        }
        return (
            <ul>
                {items.map(item => (
                    <li key={item.id}>
                        <img src={item.poster_path} alt="poster"/>
                        <p>{item.title}</p>
                        <p>{item.genres}</p>
                    </li>
                ))}
            </ul>
        );
    }
}

export default SwaggerService;
