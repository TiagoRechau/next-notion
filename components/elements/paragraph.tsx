import { EquationRichTextItemResponse, MentionRichTextItemResponse, ParagraphBlockObjectResponse, TextRichTextItemResponse } from "@notionhq/client/build/src/api-endpoints";
import { Colors } from "../../colors";
import { RichItem } from "./richItem";

type IParagraph = ParagraphBlockObjectResponse["paragraph"];
export const Paragraph = ({color, rich_text}: IParagraph) => {
    // return <p style={{color: Colors[color]}}>
    return <p>
        {rich_text.map(({type, ...props}) => {
            const Element = RichItem[type];
            let args;
            if(type === 'text') {
               args = (props as TextRichTextItemResponse)
            } else if(type === 'equation') {
                args = (props as EquationRichTextItemResponse)
            } else if(type === 'mention') {
                args = (props as MentionRichTextItemResponse)
            }
            return <Element key={props.plain_text} {...args} />
        })}
    </p>
}