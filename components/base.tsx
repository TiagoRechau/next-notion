export const Base = ({
    type,
    ...otherProps
}: {
    type: string;
    [key: string]: any;
}) => {
    switch (type) {
        case "heading_1":
            return <h1>{otherProps[type].rich_text?.[0]?.plain_text}</h1>;
        case "heading_2":
            return <h2>{otherProps[type].rich_text?.[0]?.plain_text}</h2>;
        case "heading_3":
            return <h3>{otherProps[type].rich_text?.[0]?.plain_text}</h3>;
        case "paragraph":
            return <p>{otherProps[type].rich_text?.[0]?.content}</p>;
        case 'child_page': 
            return <a href={`/page/${otherProps.id}`}>{otherProps[type].title}</a>
        default:
            return <span>{otherProps[type].rich_text?.[0]?.content}</span>;
    }
};
