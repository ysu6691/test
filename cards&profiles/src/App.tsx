import ProfileSmallLight from './components/profiles/ProfileSmallLight';
import ProfileMediumLight from './components/profiles/ProfileMediumLight';
import ProfileLargeLight from './components/profiles/ProfileLargeLight';
import ProfileStoreLight from './components/profiles/ProfileStoreLight';
import CardLabelMediumLight from './components/cards/CardLabelMediumLight';
import CardVoteLight from './components/cards/CardVoteLight';
import CardOverlayLabel from './components/cards/CardOverlayLabel';
import CardNotLabel from './components/cards/CardNotLabel';
import CardLabelLarge from './components/cards/CardLabelLarge';

function App() {
  const sampleAnimal = {
    animalName: '우파루파파',
    // 이미지는 DB에서 오는 정보에 따라서 수정 필요할 듯?
    imgSrc: require('./imgs/sampleAnimal.jfif'),
    gender: 'male',
    species: 'axolotl',
  };

  const sampleStore = {
    storeName: '쥬라기스토어',
    // 여기 이미지도 마찬가지
    imgSrc: require('./imgs/sampleStore.jpg'),
  };

  // 썸네일 밑에 종 이미지 처리하는 로직 어떻게 처리할지 회의 필요
  // 해당 방송의 모든 동물 받아서 서로 다른 종 정보만 prop할지 등등...
  // 우선 모든 동물 정보 prop 하기
  const sampleBroadcastAnimalList = [
    {
      species: 'axolotl',
    },
    {
      species: 'scincella',
    },
    {
      species: 'leopard gecko',
    },
    {
      species: 'iguanas',
    },
  ];

  return (
    <div>
      {/* Profile */}
      <div>
        <ProfileSmallLight imgSrc={sampleAnimal.imgSrc} />
        <ProfileMediumLight imgSrc={sampleAnimal.imgSrc} />
        <ProfileLargeLight
          imgSrc={sampleAnimal.imgSrc}
          animalName={sampleAnimal.animalName}
          gender={sampleAnimal.gender}
          species={sampleAnimal.species}
        />
        <ProfileStoreLight
          imgSrc={sampleStore.imgSrc}
          storeName={sampleStore.storeName}
        />
      </div>

      <hr />

      {/* Card */}
      <div>
        <CardLabelMediumLight
          imgSrc={sampleAnimal.imgSrc}
          title="우파루파 먹방 보러 올 사람"
        />
        <CardVoteLight imgSrc={sampleAnimal.imgSrc} title="먹이1" />
        <CardOverlayLabel imgSrc={sampleAnimal.imgSrc} title="Label" />
        <CardNotLabel imgSrc={sampleAnimal.imgSrc} />
        <CardLabelLarge
          thumbnailSrc={sampleAnimal.imgSrc}
          animalList={sampleBroadcastAnimalList}
          title="우파루파 먹방 보러 올 사람"
        />
      </div>
    </div>
  );
}

export default App;
