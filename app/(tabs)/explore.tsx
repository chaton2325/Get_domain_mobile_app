import { StyleSheet, Image, Platform, Button } from 'react-native';

import { Collapsible } from '@/components/Collapsible';
import { ExternalLink } from '@/components/ExternalLink';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { IconSymbol  } from '@/components/ui/IconSymbol';

export default function TabTwoScreen() {
  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: '#D0D0D0', dark: '#353636' }}
      headerImage={
        <IconSymbol
          size={310}
          color="#808080"
          name="chevron.left.forwardslash.chevron.right"
          style={styles.headerImage}
        />
      }>
      <ThemedView style={styles.titleContainer}>
        <ThemedText type="title">Notre Communauté</ThemedText>
      </ThemedView>
      <ThemedText>
        Nous sommes une communauté à but non lucratif basée au Cameroun, dédiée à l'innovation et au partage de connaissances.
      </ThemedText>
      <Button title="Faire un don" onPress={() => alert('Merci pour votre soutien !')} color="#864AF9" />
      <Collapsible title="File-based routing">
        <ThemedText>
          Cette application a deux écrans:{' '}
          <ThemedText type="defaultSemiBold">app/(tabs)/index.tsx</ThemedText> et{' '}
          <ThemedText type="defaultSemiBold">app/(tabs)/explore.tsx</ThemedText>
        </ThemedText>
        <ThemedText>
          Le fichier de mise en page dans <ThemedText type="defaultSemiBold">app/(tabs)/_layout.tsx</ThemedText>{' '}
          configure le navigateur à onglets.
        </ThemedText>
        <ExternalLink href="https://docs.expo.dev/router/introduction">
          <ThemedText type="link">En savoir plus</ThemedText>
        </ExternalLink>
      </Collapsible>
      <Collapsible title="Android, iOS, et support web">
        <ThemedText>
          Vous pouvez ouvrir ce projet sur Android, iOS et le web. Pour ouvrir la version web, appuyez sur{' '}
          <ThemedText type="defaultSemiBold">w</ThemedText> dans le terminal exécutant ce projet.
        </ThemedText>
      </Collapsible>
    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  headerImage: {
    color: '#808080',
    bottom: -90,
    left: -35,
    position: 'absolute',
  },
  titleContainer: {
    flexDirection: 'row',
    gap: 8,
  },
});
