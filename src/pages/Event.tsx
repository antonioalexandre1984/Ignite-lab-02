import { useParams } from "react-router-dom";
import { Sidebar } from "../components/Sidebar/Sidebar";
import { Video } from "../components/Video/Video";
import { Header } from "./../components/Header/Header";


type Params = {
    slug: string;
}

export function Event() {
    const { slug } = useParams<Params>();
    return (
        <div className="flex flex-col min-h-screen">
            <Header />
            <main className="flex flex-1">
                {slug
                    ? <Video lessonSlug={slug} />
                    : <div className="flex-1" />
                }
                <Sidebar />
            </main>


        </div>
    )
}
