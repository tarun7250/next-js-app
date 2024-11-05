
import { Character } from '@/components/characters/Character';
import { followCharacter } from '@/mutations/follow';
import { getCharacterById } from '@/queries/characterById';
import { getCharacters } from '@/queries/characters';

const CharacterPage = ({characterDetails}) => {

    const onFollow = () => {
        followCharacter({id : characterDetails.character.id});
        console.log(characterDetails.character.id);
    }
  return (
    <>
        <Character character={characterDetails.character} onFollow={onFollow} />
    </>
  )
}

/*
const paths = posts.map((post) => ({
    params: { id: post.id },
  }))
 
  // { fallback: false } means other routes should 404
  return { paths, fallback: false }
*/

export const getStaticPaths = async () => {
    const result = await getCharacters();
    const data = result.characters.results;
    const paths = data.map((character) => {
        return {params : {id: character.id}}
    })
    return { paths, fallback: false };
}

export const getStaticProps = async ({params}) => {

    const characterDetails = await getCharacterById({id: params.id});
    
    return { props: {characterDetails} };
}

export default CharacterPage