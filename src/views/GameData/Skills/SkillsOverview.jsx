import { skills } from '../../../data/skills/skills';
import { SkillIcon } from '../../../components/SkillIcon/SkillIcon';
import { SubNavigationBar } from '../../../components/SubNavigationBar/SubNavigationBar';
import { navigationDataGameData } from '../SubMenuData';
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
		<>
			<SubNavigationBar navigationData={navigationDataGameData} />
			<div className='container-dark'>
				<div className='flex flex-col items-center container-light'>
					<h1 className='text-2xl m-2'>Skills Data Overview</h1>
					<p className='text-sm m-2'>Shows a list of all skills.</p>
				</div>
				<div className='container-dark'>
					<div className='container-dark-inner'>
						<h2 className='text-xl text-center'>Skills</h2>
					</div>
					<div className='container-dark-inner'>{skillIcons}</div>
				</div>
			</div>
		</>
	);
};
