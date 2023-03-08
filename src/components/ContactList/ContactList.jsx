import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Component } from 'react';

export class ContactList extends Component {
  onDellateBtn = event => {
    this.props.delateContact(event.currentTarget.id);
  };
  render() {
    if (this.props.data.length > 0) {
      return (
        <ul>
          {this.props.data.map(({ id, name, number }) => {
            return (
              <ContactItem key={id}>
                {name} : {number}
                <ContactBtn id={id} type="button" onClick={this.onDellateBtn}>
                  delate
                </ContactBtn>
              </ContactItem>
            );
          })}
        </ul>
      );
    }
  }
}

ContactList.propTypes = {
  delateContact: PropTypes.func,
  data: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ),
};

const ContactItem = styled.li`
  margin-bottom: 20px;
`;
const ContactBtn = styled.button`
  margin-left: 20px;
  border-radius: 20px;
  border: transparent;
  padding: 10px 25px;
  background-color: burlywood;
`;
