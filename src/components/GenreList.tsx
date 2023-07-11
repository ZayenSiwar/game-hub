import React from 'react'
import useData  from '../hooks/useData';
import useGenres, {Genre} from '../hooks/useGenres'
import { HStack, Image, List, Text,ListItem, Spinner } from '@chakra-ui/react';
import getCroppedImageUrl from '../services/image-url';
const GenreList = () => {
    const {data,isLoading,error}= useGenres();
    if (error ) return null;
    if (isLoading) return <Spinner></Spinner>;
  return (
    <List>
      {data.map(genre => <ListItem key={genre.id} paddingY='6px' >
        <HStack>
          <Image boxSize='32px' borderRadius={8} src={getCroppedImageUrl (genre.image_background)}/>
          <Text fontSize='lg'>{genre.name}</Text>
        </HStack>
        </ListItem>)}
    </List>
  )
}

export default GenreList
