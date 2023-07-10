import { SimpleGrid, Text} from "@chakra-ui/react"
import useGames from "../hooks/useGames"
import GameCard from "./GameCard";

const GameGrid = () => {
   const {games,error}=useGames();
  return (
    <>
    {error && <Text>{error}</Text>}
//sm:1, md:2, lg:3, xl:5
   <SimpleGrid columns={3} padding='10px' spacing={10}>
    {games.map((game)=>(
 <GameCard key={game.id} game={game}/>
 ))}
   </SimpleGrid>
   </>
  )
}

export default GameGrid
