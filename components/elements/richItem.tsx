import { EquationRichTextItemResponse, MentionRichTextItemResponse, TextRichTextItemResponse } from "@notionhq/client/build/src/api-endpoints";
import { FC } from "react";

const getAnnotationsClasses = (annotations: any) => {
    return Object.keys(annotations).filter((annotation) => annotations[annotation]).join(' ');
}
type ITextRichTextItem = TextRichTextItemResponse;
const TextRichTextItem: FC<ITextRichTextItem> = ({text, href, annotations}: ITextRichTextItem) => {
    if(href) {
        return <a href={href} className={getAnnotationsClasses(annotations)}>{text.content}</a>
    }
    return <span className={getAnnotationsClasses(annotations)}>{text.content}</span>
}

type IMentionRichTextItem = MentionRichTextItemResponse;
const MentionRichTextItem: FC<IMentionRichTextItem> = ({plain_text, annotations}) => {
    return <span className={getAnnotationsClasses(annotations)}>{plain_text}</span>
}

type IEquationRichTextItem = EquationRichTextItemResponse;
const EquationRichTextItem: FC<IEquationRichTextItem> = ({plain_text, annotations}) => {
    return <span className={getAnnotationsClasses(annotations)}>{plain_text}</span>
}

export const RichItem = {
    text: TextRichTextItem,
    mention: MentionRichTextItem,
    equation: EquationRichTextItem
}