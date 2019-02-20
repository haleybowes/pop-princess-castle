import React, { Component } from "react";

class Profile extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: "",
            jobTitle: "",
            slack: "",
            bio: "",
            skills: [],
            interests: [],
            availability: ""
        };

        this.handleInputChange = this.handleInputChange.bind(this);
    }

    componentDidMount() {

    }

    handleInputChange(event) {
        const target = event.target;
        const value =
            target.type === "checkbox" ? target.checked : target.value;
        const name = target.name;

        this.setState({
            [name]: value
        });
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <label>
                    Name:
                    <input
                        name="name"
                        type="text"
                        value={this.state.name}
                        onChange={this.handleInputChange}
                    />
                </label>
                <label>
                    Job Title:
                    <input
                        name="jobTitle"
                        type="text"
                        value={this.state.jobTitle}
                        onChange={this.handleInputChange}
                    />
                </label>
                <label>
                    Slack ID:
                    <input
                        name="slack"
                        type="text"
                        value={this.state.slack}
                        onChange={this.handleInputChange}
                    />
                </label>
                <label>
                    **SHORT** Bio:
                    <input
                        name="bio"
                        type="text"
                        value={this.state.bio}
                        onChange={this.handleInputChange}
                    />
                </label>
                <label>
                    Availability:
                    <input
                        name="availability"
                        type="text"
                        value={this.state.availability}
                        onChange={this.handleInputChange}
                    />
                </label>
                <input type="submit" value="Submit" />
            </form>
        );
    }
}

export default Profile;
