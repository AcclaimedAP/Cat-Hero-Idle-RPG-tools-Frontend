import YellowStar1 from 'assets/sprites/companions/stars/Star1.png';
import YellowStar2 from 'assets/sprites/companions/stars/Star2.png';
import YellowStar3 from 'assets/sprites/companions/stars/Star3.png';
import YellowStar4 from 'assets/sprites/companions/stars/Star4.png';
import YellowStar5 from 'assets/sprites/companions/stars/Star5.png';
import RedStar1 from 'assets/sprites/companions/stars/Star6.png';
import RedStar2 from 'assets/sprites/companions/stars/Star7.png';
import RedStar3 from 'assets/sprites/companions/stars/Star8.png';
import RedStar4 from 'assets/sprites/companions/stars/Star9.png';
import RedStar5 from 'assets/sprites/companions/stars/Star10.png';
import BlueStar1 from 'assets/sprites/companions/stars/Star11.png';
import BlueStar2 from 'assets/sprites/companions/stars/Star12.png';
import BlueStar3 from 'assets/sprites/companions/stars/Star13.png';

export const getCompanionStars = (level: number) => {
	const stars = [YellowStar1, YellowStar2, YellowStar3, YellowStar4, YellowStar5, RedStar1, RedStar2, RedStar3, RedStar4, RedStar5, BlueStar1, BlueStar2, BlueStar3];
	const index = Math.min(stars.length - 1, Math.max(0, Math.floor((level - 1) / 10)));
	return stars[index];
};
