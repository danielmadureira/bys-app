import { StatusBar } from 'expo-status-bar';
import React from 'react';
import {
	View,
	SectionList,
	SafeAreaView,
	FlatList,
} from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { ImageCard, TitleHeader } from '../../components';

import { styles } from './styles'
import ImagemSVG from '../../../assets/Feed-Example.jpg'
import HorizontalFirst from '../../../assets/Horizontal.jpg'

const Feed = ({ navigation }) => {
	return (
		<ScrollView contentContainerStyle={styles.wrapper} style={styles.container}>
			<StatusBar style="light" backgroundColor="#000" />
			<View style={styles.container_header}>
				<TitleHeader
					title="Feed"
					subtitle="Veja as últimas novidades"
				/>
			</View>
			<SafeAreaView >
				<SectionList
					contentContainerStyle={styles.space}
					stickySectionHeadersEnabled={false}
					sections={SECTIONS}
					renderSectionHeader={({ section }) => (
						<>
							{section.horizontal ? (<View style={styles.wrapper}>
								<View style={styles.container_header}>
									<TitleHeader
										title={section.title}
										subtitle="Veja as últimas novidades"
										top={1}
									/>
								</View>
								<FlatList
									horizontal
									data={section.data}
									renderItem={({ item }) => <ImageCard smallSize item={item} />}
									showsHorizontalScrollIndicator={false}
								/>
							</View>
							) : null}
						</>
					)}
					renderItem={({ item, section }) => {
						if (section.horizontal) {
							return null;
						}
						return <View style={styles.wrapper}>
							<ImageCard 
								onPress={() => navigation.navigate('DetailFeed')} 
								item={item} 
							/>
						</View>;
					}}
				/>
			</SafeAreaView>
		</ScrollView>
	);
};

const SECTIONS = [
	{
		title: 'Entretenimento',
		data: [
			{
				key: '1',
				text: 'Item text 1',
				uri: 'https://picsum.photos/id/1/200',
				id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
				title: 'Orientações nutricionais no COVID-19',
				subtitle: 'Larissa Menezes Santos - Nutricionista, especialista em Terapia Nutricional',
				picture: ImagemSVG,
			},
			{
				key: '2',
				text: 'Item text 2',
				uri: 'https://picsum.photos/id/10/200',
				id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
				title: 'Orientações nutricionais no COVID-19',
				subtitle: 'Larissa Menezes Santos - Nutricionista, especialista em Terapia Nutricional',
				picture: ImagemSVG,
			}
		],
	},
	{
		title: 'Entretenimento',
		horizontal: true,
		data: [
			{
				key: '1',
				text: 'Item text 1',
				uri: 'https://picsum.photos/id/1011/200',
				id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
				title: 'Orientações nutricionais no COVID-19',
				subtitle: 'Larissa Menezes Santos - Nutricionista, especialista em Terapia Nutricional',
				picture: HorizontalFirst,
			},
			{
				key: '2',
				text: 'Item text 2',
				uri: 'https://picsum.photos/id/1012/200',
				id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
				title: 'Orientações nutricionais no COVID-19',
				subtitle: 'Larissa Menezes Santos - Nutricionista, especialista em Terapia Nutricional',
				picture: HorizontalFirst,
			},

			{
				key: '3',
				text: 'Item text 3',
				uri: 'https://picsum.photos/id/1013/200',
				id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
				title: 'Orientações nutricionais no COVID-19',
				subtitle: 'Larissa Menezes Santos - Nutricionista, especialista em Terapia Nutricional',
				picture: HorizontalFirst,
			},
			{
				key: '4',
				text: 'Item text 4',
				uri: 'https://picsum.photos/id/1015/200',
				id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
				title: 'Orientações nutricionais no COVID-19',
				subtitle: 'Larissa Menezes Santos - Nutricionista, especialista em Terapia Nutricional',
				picture: HorizontalFirst,
			},
			{
				key: '5',
				text: 'Item text 5',
				uri: 'https://picsum.photos/id/1016/200',
				id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
				title: 'Orientações nutricionais no COVID-19',
				subtitle: 'Larissa Menezes Santos - Nutricionista, especialista em Terapia Nutricional',
				picture: ImagemSVG,
			},
		],
	},
	{
		title: 'Based on your recent listening',
		data: [
			{
				key: '1',
				text: 'Item text 1',
				uri: 'https://picsum.photos/id/1020/200',
				id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
				title: 'Orientações nutricionais no COVID-19',
				subtitle: 'Larissa Menezes Santos - Nutricionista, especialista em Terapia Nutricional',
				picture: ImagemSVG,
			},
			{
				key: '2',
				text: 'Item text 2',
				uri: 'https://picsum.photos/id/1024/200',
				id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
				title: 'Orientações nutricionais no COVID-19',
				subtitle: 'Larissa Menezes Santos - Nutricionista, especialista em Terapia Nutricional',
				picture: ImagemSVG,
			},

			{
				key: '3',
				text: 'Item text 3',
				uri: 'https://picsum.photos/id/1027/200',
				id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
				title: 'Orientações nutricionais no COVID-19',
				subtitle: 'Larissa Menezes Santos - Nutricionista, especialista em Terapia Nutricional',
				picture: ImagemSVG,
			},
			{
				key: '4',
				text: 'Item text 4',
				uri: 'https://picsum.photos/id/1035/200',
				id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
				title: 'Orientações nutricionais no COVID-19',
				subtitle: 'Larissa Menezes Santos - Nutricionista, especialista em Terapia Nutricional',
				picture: ImagemSVG,
			},
			{
				key: '5',
				text: 'Item text 5',
				uri: 'https://picsum.photos/id/1038/200',
				id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
				title: 'Orientações nutricionais no COVID-19',
				subtitle: 'Larissa Menezes Santos - Nutricionista, especialista em Terapia Nutricional',
				picture: ImagemSVG,
			},
		],
	},
];

export default Feed;