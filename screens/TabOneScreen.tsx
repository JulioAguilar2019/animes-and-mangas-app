import { CardSlider, Loader } from '../components';
import { RootTabScreenProps } from '../types';
import { ScrollView } from 'react-native';
import { useAnime, useManga } from '../hooks/';
import Header from '../components/Header';

export default function TabOneScreen({ navigation }: RootTabScreenProps<'TabOne'>) {
    const { animes, isLoading } = useAnime()
    const { mangas } = useManga()

    return (
        isLoading ? <Loader /> :
            <ScrollView>
                <Header animeData={animes[1]} isLoading={isLoading} />
                <CardSlider titleAnime='Top Trending Animes' titleManga='Top Trending Mangas' animeData={animes} mangaData={mangas} isLoading={isLoading} />
            </ScrollView>
    );
}
