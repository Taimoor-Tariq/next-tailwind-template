module.exports = {
    async redirects() {
        return [
            {
                source: "/github",
                destination: "https://github.com/Taimoor-Tariq",
                permanent: true,
            },
        ];
    },
    // async rewrites() {
    //     return [
    //         {
    //             source: "/github",
    //             destination: "https://github.com/Taimoor-Tariq",
    //         },
    //     ];
    // },
};
