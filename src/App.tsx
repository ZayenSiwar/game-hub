import { Box, Flex, Grid, GridItem, HStack, Show } from '@chakra-ui/react'
import NavBar from './components/NavBar'
import GameGrid from './components/GameGrid'
import GenreList from './components/GenreList'
import { useState } from 'react'
import { Genre } from './hooks/useGenres'
import PlatformSelected from './components/PlatformSelected'
import { Platform } from './hooks/useGames'
import SortSelector from './components/SortSelector'
import GameHeading from './components/GameHeading'
export interface GameQuery{
  genre : Genre |null;
  platform: Platform | null;
  SortOrder:string;
  searchText:string;
};


function App() {
  const[gameQuery,setGameQuery]=useState<GameQuery>({} as GameQuery)
  //const[selectedPlatform,setSelectedPlatform]= useState<Platform |null>(null);

  //const[selectedGenre,setSelectedGenre]=useState<Genre | null>(null);
  return <Grid templateAreas={{base:`"nav " " main"`,
  lg :`"nav nav" "aside main"`}}
  
   
   templateColumns={{
    base:'1fr',
    lg:'200px 1fr'
   }}
   >
    <GridItem area='nav' >
    <NavBar onSearch={(searchText)=> setGameQuery({...gameQuery,searchText})} /></GridItem>
    <Show above="lg">
    <GridItem area='aside' paddingX={5} >
      <GenreList selectedGenre={gameQuery.genre} onSelectGenre={genre=> setGameQuery({...gameQuery,genre})} />
    </GridItem>
    </Show>
    <GridItem area='main' >
      <Box paddingLeft={2}>
      <GameHeading   gameQuery={gameQuery}/>
      <Flex   marginBottom={5}>
        <Box marginRight={5}>
        <PlatformSelected selectedPlatform={gameQuery.platform} onSelectPlatform={(platform) =>(setGameQuery({...gameQuery,platform}))}/>  

        </Box>
     <SortSelector SortOrder={gameQuery.SortOrder} onSelectSortOrder={(SortOrder)=> setGameQuery({...gameQuery,SortOrder})}/>
     </Flex>
     </Box>
      <GameGrid gameQuery={gameQuery}/>
    </GridItem>
  </Grid>
} 
export default App
