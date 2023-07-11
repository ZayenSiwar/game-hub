import { SimpleGrid, Skeleton, Text} from "@chakra-ui/react"
import useGames from "../hooks/useGames"
import GameCard from "./GameCard";
import GameCardSkeleton from "./GameCardSkeleton";
import GameCardContainer from "./GameCardContainer";
const Skeletons=[1,2,3,4,5,6];   
const GameGrid = () => {
   const {games,error,isLoading}=useGames();
  return (
    //sm: 1, md: 2, lg: 3, xl: 5
    <>
    {error && <Text>{error}</Text>}

   <SimpleGrid columns={3} padding='10px' spacing={100}>
    {isLoading && (Skeletons.map(skeleton => <GameCardContainer><GameCardSkeleton key={skeleton}/></GameCardContainer>))}
    {games.map((game)=>(
      <GameCardContainer>
 <GameCard key={game.id} game={game}/>
 </GameCardContainer>
 ))}
   </SimpleGrid>
   </> 
  )
}

export default GameGrid
