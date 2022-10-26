import type { GetServerSidePropsContext, NextPage } from "next";
import { Base } from "../../components/base";

const Page: NextPage<{ data: any }> = ({ data }) => {
    return (
        <main>
            <h1>{data.page.properties.title.title?.[0].plain_text}</h1>

            {data.blocks.results.map((resultElement: any, index: number) => {
                //i don't care about key now
                if (resultElement.type) {
                    return <Base {...resultElement} key={index} />;
                }
            })}
        </main>
    );
};

export const getServerSideProps = async ({
    query,
    req,
}: GetServerSidePropsContext) => {
    const { pageId } = query;
    const protocol = req.headers["x-forwarded-proto"] || "http";
    const baseUrl = req ? `${protocol}://${req.headers.host}` : "";
    const response = await fetch(`${baseUrl}/api/hello/${pageId}`);
    const data = await response.json();
    return {
        props: { data },
    };
};
export default Page;
