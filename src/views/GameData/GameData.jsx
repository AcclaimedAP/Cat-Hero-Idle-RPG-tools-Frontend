import { companions } from '../../data/companions/companions';
import { skills } from '../../data/skills/skills';
import { SkillIcon } from '../../components/SkillIcon/SkillIcon';

export const GameData = () => {
	const skillIcons = skills.map((skill) => {
		return (
			<SkillIcon
				key={skill.name}
				skill={skill}
			/>
		);
	});
	return (
		<div>
			<div className='flex h-12 justify-center bg-gray-700'>
				<h1>Game Data</h1>
			</div>
			<div>{skillIcons}</div>
		</div>
	);
};
