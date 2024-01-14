import { skills } from '../../../data/skills/skills';
import { SkillIcon } from '../../../components/SkillIcon/SkillIcon';
export const SkillsOverview = () => {
	const skillIcons = skills.map((skill) => {
		return (
			<SkillIcon
				key={skill.name}
				skill={skill}
			/>
		);
	});

	return (
		<div className='h-[600px] bg-secondary'>
			<div className='flex flex-col justify-center items-center bg-gray-700'>
				<h1 className='text-2xl m-2'>Skills Data Overview</h1>
				<p className='text-sm m-2'>Shows a list of all skills.</p>
			</div>
			<div className='bg-primary px-4 py-2 m-4 border-2 border-solid border-accent'>
				<div className='bg-secondary py-2 my-2 w-full'>
					<h2 className='text-xl text-center'>Skills</h2>
				</div>
				<div className='w-full bg-secondary p-4 my-2'>{skillIcons}</div>
			</div>
		</div>
	);
};
