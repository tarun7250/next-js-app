import CharacterList from "@/components/characters/CharacterList";
import { getCharacters } from "@/queries/characters"


const Index = ({data}) => {
    
    console.log(data);
    return (
        <>
            <CharacterList characters={data}/>
        </>
    )
}

export const getStaticProps = async () => {
    const result = await getCharacters();
    const data = result.characters.results;
    return {
        props : { data }
    };
}

export default Index