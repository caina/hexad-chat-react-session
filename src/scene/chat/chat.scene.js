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
                <ChatSection>
                    <ChatContentHeader>
                        <div>
                            <h3>Christian Martinez</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                        </div>
                    </ChatContentHeader>
                    <ChatContent>
                        <ChatEntry>
                            <ContactPicture src="https://bit.ly/2K4WKzX"/>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ac accumsan odio, eleifend
                                mollis urna. Donec euismod lorem nec enim vulputate, a mollis est blandit. Proin in
                                lectus lectus. Donec efficitur risus ut dictum lobortis. Vivamus gravida, enim nec
                                sodales euismod, nunc turpis euismod ligula, nec varius nulla erat sagittis ipsum. In
                                rhoncus libero eu libero varius, a vestibulum augue mollis. Nam at nisl massa</p>
                        </ChatEntry>
                        <ChatEntry>
                            <ContactPicture src="https://bit.ly/2K4WKzX"/>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ac accumsan odio, eleifend
                                mollis urna. Donec euismod lorem nec enim vulputate</p>
                        </ChatEntry>
                        <ChatEntry>
                            <ContactPicture src="https://bit.ly/2K4WKzX"/>
                            <p>
                                rhoncus libero eu libero varius, a vestibulum augue mollis. Nam at nisl massa</p>
                        </ChatEntry>
                    </ChatContent>
                    <ChatInput>
                        <input type="text"/>
                        <button>Send</button>
                    </ChatInput>
                </ChatSection>
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
    min-width: 300px;
    overflow: scroll;
`;

const ChatSection = styled.div`
  display: flex;
  flex-direction: column;
  padding-bottom: 60px;
  flex-grow: 1;
  position: relative;
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
  border-radius: 50%;
  width: 50px;
  height: 50px;
`;

const ChatInput = styled.div`
  position: absolute;
  height:50px;
  bottom: 10px;
  left: 0;
  right: 0;
  input {
    height: 50px;
    width: 80%;
    font-size: 18px;
    font-family: Helvetica, Serif;
    color: #727274;
  }
  button {
    border-radius: 5px;
    border: 1px solid #31ABF4;
    padding: 20px;
    color: white;
    background-color: #31ABF4;
  }
`;

const ChatContent = styled.div`
  display:flex;
  flex-direction: column;
  flex-grow: 1;
  justify-content: flex-end;
`;

const ChatContentHeader = styled.div`
  display:flex;
  justify-content: space-between;
  align-items: center;
  height: 50px;
  padding: 0 15px;
  border-bottom: 1px solid #F4F5F6;
    
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

const ChatEntry = styled.div`
  display:flex;
  justify-content: flex-start;
  align-items: flex-start;
  padding: 10px;
  p {
    margin: 0 0 0 10px;
    background: #31ABF4;
    color: white;
    padding: 10px;
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
    border-bottom-right-radius: 10px;
  }  
`;

export default ChatScene;
