import { companions } from '../../data/companions/companions';
import { skills } from '../../data/skills/skills';
import { SkillIcon } from '../../components/SkillIcon/SkillIcon';
import { CompanionIcon } from '../../components/CompanionIcon/CompanionIcon';

export const GameData = () => {
	const skillIcons = skills.map((skill) => {
		return (
			<SkillIcon
				key={skill.name}
				skill={skill}
			/>
		);
	});
	const companionIcons = companions.map((companion) => {
		return (
			<CompanionIcon
				key={companion.name}
				companion={companion}
			/>
		);
	});
	return (
		<div className='h-[600px] bg-secondary'>
			<div className='flex flex-col justify-center items-center bg-gray-700'>
				<h1 className='text-2xl m-2'>Game Data</h1>
				<p className='text-sm m-2'>Shows all added game data in form of icons. The main purpose of this page will be to gain quick access to information about specific skills, companions, runes, or other parts.</p>
			</div>
			<div className='bg-primary px-4 py-2 m-4 border-2 border-solid border-accent'>
				<div className='bg-secondary py-2 my-2 w-full'>
					<h2 className='text-xl text-center'>Skills</h2>
				</div>
				<div className='w-full bg-secondary p-4 my-2'>{skillIcons}</div>
			</div>
			<div className='bg-primary px-4 py-2 m-4 border-2 border-solid border-accent'>
				<div className='bg-secondary py-2 my-2 w-full'>
					<h2 className='text-xl text-center'>Companions</h2>
				</div>
				<div className='w-full bg-secondary p-4 my-2'>{companionIcons}</div>
			</div>
		</div>
	);
};
