interface PageProps {
    params: {
        url: string | string[] | undefined
    }
}

const UrlPage: React.FC<PageProps> = async ({ params }) => {
    return <div>page</div>
}
export default UrlPage
