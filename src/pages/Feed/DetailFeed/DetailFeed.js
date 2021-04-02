import { StatusBar } from 'expo-status-bar'
import React, { useEffect } from 'react'
import {
	Image,
	View
} from 'react-native'
import AutoHeightWebView from 'react-native-autoheight-webview'
import { ScrollView } from 'react-native-gesture-handler'
import {
	BackBase,
	LoaderBase,
	TextBase,
	TitleHeader
} from '../../../components'

import { styles } from './styles'
import { useDispatch, useSelector } from 'react-redux'
import { actions } from '../../../store/feed'
import { Dimensions } from 'react-native'
import ImageDefault from '../../../../assets/feed-default.png'

const DetailFeed = ({ route, navigation }) => {
	const { itemId } = route.params;
	const { details, isLoadingDetails } = useSelector(state => state.feed)
	const dispatch = useDispatch()

	useEffect(() => {
		dispatch(actions.getFeedById(itemId))
	}, [itemId])

	return (
		<ScrollView contentContainerStyle={styles.wrapper} style={styles.container}>
			<StatusBar style="light" backgroundColor="#000" />
			{isLoadingDetails ? (
				<LoaderBase height />
			) : (<>
				<View style={styles.container_header}>
					<TitleHeader
						title={details.title}
						subtitle={details.author}
					/>
					<BackBase navigation={navigation} />
				</View>

				<View style={styles.image_container}>
					<View style={styles.image_wrapper}>
						<View style={styles.image_shadow}>
							<Image
								borderRadius={20}
								style={styles.image}
								source={
									details.picture ?
										{ uri: details.picture } :
										ImageDefault
								}
							/>
						</View>
					</View>
					<View style={styles.image_description_wrapper}>
						<TextBase numberOfLines={1} style={styles.image_description}>
							{details.picture_description}
						</TextBase>
					</View>
				</View>

				<View style={styles.wrapper_body}>
					<AutoHeightWebView
						style={{ height: Dimensions.get('screen').height * 3, width: '100%' }}
						customStyle={`
						* {
							font-size: 18px;
						}
					`}
						onSizeUpdated={size => { }}
						files={[{
							href: 'cssfileaddress',
							type: 'text/css',
							rel: 'stylesheet'
						}]}
						source={{ html: details.text }}
						scalesPageToFit={true}
						viewportContent={'width=device-width, user-scalable=no'}
					/>
				</View>
			</>)}
		</ScrollView>
	);
};

export default DetailFeed;
