import { EquationRichTextItemResponse, MentionRichTextItemResponse, ParagraphBlockObjectResponse, TextRichTextItemResponse } from "@notionhq/client/build/src/api-endpoints";
import { RichItem } from "./richItem";

type IParagraph = ParagraphBlockObjectResponse["paragraph"];
export const Paragraph = ({color, rich_text}: IParagraph) => {
    // return <p style={{color: Colors[color]}}>
    return <p>
        {rich_text.map(({type, ...props}) => {
            const Element = RichItem[type] as any;
            let args: TextRichTextItemResponse | EquationRichTextItemResponse | MentionRichTextItemResponse;
            if(type === 'text') {
               args = (props as TextRichTextItemResponse)
            } else if(type === 'equation') {
                args = (props as EquationRichTextItemResponse)
            } else {
            // } else (type === 'mention') {
                args = (props as MentionRichTextItemResponse)
            }
            // eslint-disable-next-line react/jsx-key
            return <Element {...args}/>
        })}
    </p>
}