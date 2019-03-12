import React from 'react';
import styled from 'styled-components';

class ChatScene extends React.Component {

    render() {
        return (
            <ContainerSection>
                <ContactsSection>
                    <ul>
                        <li>
                            {
                                [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17 ].map(key => {
                                    return (
                                        <ContactRow>
                                            <ContactPicture src="https://bit.ly/2K4WKzX"/>
                                            <ContactName>
                                                <h3>Christian Martinez</h3>
                                                <p>Don't forget to bring a pizza!</p>
                                            </ContactName>
                                        </ContactRow>
                                    )
                                })
                            }

                        </li>
                    </ul>
                </ContactsSection>
                <ChatSection>hey</ChatSection>
            </ContainerSection>
        )
    }
}

const ContainerSection = styled.div`
  display: flex;
  flex-direction: row;
  height: 100%;
`;

const ContactsSection = styled.div`
    display: flex;
    justify-content: center;
    align-items: flex-start;
    background-color: #FAFAFC;
    min-height: 100%;
    overflow: scroll;
`;

const ChatSection = styled.div`
  display: flex;
  flex-grow: 1;
`;

const ContactRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px 10px;
  border-top: 1px solid #F4F5F6;
  border-bottom: 1px solid #F4F5F6;
  cursor: pointer;
  &:hover {
    background-color: white;
  }
`;

const ContactName = styled.div`
  padding: 0 10px;
  h3 {
    color: #727274;
    font-weight: 500;
    margin: 0;
    padding: 0;
  }
  p {
    padding: 0;
    margin: 0;
    font-weight: normal;
    color: #C4C4C4;
  }
`;

const ContactPicture = styled.img`
  max-width: 50px;
  max-height: 50px;
  border-radius: 50%;
`;

export default ChatScene;
