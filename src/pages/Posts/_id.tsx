import '../../App.css'
import Post from "../../components/Post";
import { useParams } from 'react-router-dom';

export default function PostById() {
    const { id }: string = useParams();

    return (
        <>
            <div>
                <h1>{id}</h1>
                <Post author="MY POST SOLO" content="testtttt" id="tetete" like="0"/>
            </div>
        </>
    )
}
