import React from 'react';
import PropTypes from 'prop-types';
import {
    Button,
    FormGroup,
    Input,
    InputGroup,
    InputGroupAddon,
    InputGroupText
} from 'reactstrap';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import FontAwesome from 'react-fontawesome';
import classNames from 'classnames';

class SessionUrl extends React.Component {
    constructor(props, context) {
        super(props, context);
        
        this.state = {
            copied: false
        };
    }

    render() {
        const url = `${window.location.origin}/session/${this.props.session}`;
        return (
            this.props.session &&
            <FormGroup>
                <InputGroup>
                    <Input
                        name="session-url"
                        id="session-url"
                        value={url}
                        readOnly
                    />
                    <InputGroupAddon
                        addonType="append"
                        className={
                            classNames({
                                'clickable': !this.state.copied
                            })
                        }
                    >
                        <CopyToClipboard
                            text={url}
                            onCopy={() => this.setState({copied: true})}
                        >
                            <Button className="copy-btn">
                                <FontAwesome name={this.state.copied ? 'check' : 'copy'} fixedWidth={true} />
                            </Button>
                        </CopyToClipboard>
                    </InputGroupAddon>
                </InputGroup>
            </FormGroup>
        );
    }
}

SessionUrl.propTypes = {
    session: PropTypes.string
};

export default SessionUrl;
