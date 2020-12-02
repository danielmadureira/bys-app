import { StatusBar } from 'expo-status-bar';
import React from 'react';
import {
	View,
	SectionList,
	SafeAreaView,
	FlatList,
	Text,
} from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { BackBase, TextCard, TitleHeader } from '../../components';

import { styles } from './styles'

const Message = ({ navigation }) => {
	return (
		<ScrollView contentContainerStyle={styles.wrapper} style={styles.container}>
			<StatusBar style="light" backgroundColor="#000" />
			<View style={styles.container_header}>
				<TitleHeader
					title="Conversa"
					subtitle="Compartilhe experiências"
				/>

				<BackBase />
			</View>


			<SafeAreaView style={{ flex: 1 }}>
				<SectionList
					stickySectionHeadersEnabled={false}
					sections={SECTIONS}
					renderSectionHeader={({ section }) => (
						<>
							{<View style={styles.wrapper}>
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
									renderItem={({ item }) => {
										return <View key={item.id} style={styles.wrapper_card}>
											<TextCard smallSize diary={item} event={() => navigation.navigate('GroupMessage')} />
										</View> 
									}}
									showsHorizontalScrollIndicator={false}
								/>
							</View>}
						</>
					)}
					renderItem={({ item, section }) => {
						return null;
					}}
				/>
			</SafeAreaView>
		</ScrollView>
	);
};

const SECTIONS = [
	{
		title: "Grupo de espairecimento",
		subtitle: "Grupo para assuntos gerais",
		data: [
			{
				id: 1,
				title: 'Sala de descompressão',
				texto: 'Este espaço é dedicado para aqueles que querem compartilhar experiências não relacionadas ao COVID-19.',
				data: '20 de Julho',
			},
			{
				id: 2,
				title: 'Room name',
				texto: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
				data: '20 de Julho',
			}
		]
	},
	{
		title: "Grupo de espairecimento",
		subtitle: "Grupo para assuntos gerais",
		data: [
			{
				id: 3,
				title: 'Coronavírus',
				texto: 'Esse espaço é destinado para compartilhamento de informações e experiências relacionadas ao covid-19.',
				data: '20 de Julho',
			},
			{
				id: 4,
				title: 'Room name',
				texto: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
				data: '20 de Julho',
			}
		]
	}
];

export default Message;