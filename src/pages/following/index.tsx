import CharacterList from '@/components/characters/CharacterList';
import { EmptyPlaceholder } from '@/components/EmptyPlaceholder'
import { getFollowedCharacters } from '@/queries/followedCharacters'

const Following = ({data}) => {
  return (
    <>
        {data.length?<CharacterList characters={data}/>:<EmptyPlaceholder />}
    </>
  )
}

export const getStaticProps = async () => {
    const result = await getFollowedCharacters();
    const data = result
    return {
        props : {data}
    };

}

export default Following