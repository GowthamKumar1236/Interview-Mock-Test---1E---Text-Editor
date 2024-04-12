import {Component} from 'react'

import {VscBold} from 'react-icons/vsc'
import {GoItalic} from 'react-icons/go'
import {AiOutlineUnderline} from 'react-icons/ai'

import {
  TextEditorBgContainer,
  TextEditorContainer,
  TextEditorImgContainer,
  TextHeading,
  Image,
  EditableBgContainer,
  ButtonsContainer,
  Button,
  ItalicBtn,
  UnderlineBtn,
  HrLine,
  TextAreaElement,
} from './styledComponents'

class TextEditor extends Component {
  state = {
    fromTextToBold: false,
    fromTextToItalic: false,
    fromTextToUnderline: false,
  }

  boldBtn = () => {
    this.setState(prevState => ({
      fromTextToBold: !prevState.fromTextToBold,
    }))
  }

  italicBtn = () => {
    this.setState(prevState => ({
      fromTextToItalic: !prevState.fromTextToItalic,
    }))
  }

  underlineBtn = () => {
    this.setState(prevState => ({
      fromTextToUnderline: !prevState.fromTextToUnderline,
    }))
  }

  render() {
    const {fromTextToBold, fromTextToItalic, fromTextToUnderline} = this.state

    const color = fromTextToBold === true ? '#faff00' : '#f1f5f9'
    const italicColor = fromTextToItalic === true ? '#faff00' : '#f1f5f9'
    const underlineColor = fromTextToUnderline === true ? '#faff00' : '#f1f5f9'

    const fontWeight = fromTextToBold === true ? 'bold' : 'normal'
    const fontStyle = fromTextToItalic === true ? 'italic' : 'normal'
    const textDecoration = fromTextToUnderline === true ? 'underline' : 'normal'

    return (
      <>
        <TextEditorBgContainer>
          <TextEditorContainer>
            <TextEditorImgContainer>
              <TextHeading>Text Editor</TextHeading>
              <Image
                src="https://assets.ccbp.in/frontend/react-js/text-editor-img.png"
                alt="text editor"
              />
            </TextEditorImgContainer>
            <EditableBgContainer>
              <ButtonsContainer>
                <li>
                  <Button
                    data-testid="bold"
                    type="button"
                    color={color}
                    onClick={this.boldBtn}
                  >
                    <VscBold size={25} />
                  </Button>
                </li>
                <li>
                  <ItalicBtn
                    data-testid="italic"
                    type="button"
                    color={italicColor}
                    onClick={this.italicBtn}
                  >
                    <GoItalic size={25} />
                  </ItalicBtn>
                </li>
                <li>
                  <UnderlineBtn
                    data-testid="underline"
                    type="button"
                    color={underlineColor}
                    onClick={this.underlineBtn}
                  >
                    <AiOutlineUnderline size={25} />
                  </UnderlineBtn>
                </li>
              </ButtonsContainer>
              <HrLine />
              <TextAreaElement
                fontWeight={fontWeight}
                fontStyle={fontStyle}
                textDecoration={textDecoration}
              />
            </EditableBgContainer>
          </TextEditorContainer>
        </TextEditorBgContainer>
      </>
    )
  }
}

export default TextEditor
