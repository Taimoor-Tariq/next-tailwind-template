const Page = () => {

    return (
        <>
            Hello World
        </>
    );
};

Page.getInitialProps = async (ctx) => {
    return {
        title: "Hello World",
    };
};

export default Page;
