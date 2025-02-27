import Experience from '@/components/sections/Experience';
import Home from '@/components/sections/Home';
import Profile from '@/components/sections/Profile';
import Projects from '@/components/sections/Projects';
import Skills from '@/components/sections/Skills';
import Studies from '@/components/sections/Studies';

export default function Page() {
  return (
    <div className="flex w-full items-center justify-center">
      <div className="w-4/5">
        <Home />
        <Profile />
        <Experience />
        <Studies />
        <Skills />
        <Projects />
      </div>
    </div>
  );
}
