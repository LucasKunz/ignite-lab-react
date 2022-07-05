import classNames from "classnames";
import { useGetLessonsQuery } from "../graphql/generated";
import { Lesson } from "./Lesson";

interface SideBarProps {
  isMenuOpen: boolean;
  handleMenu: (arg0: boolean) => void;
}

export function Sidebar({ isMenuOpen, handleMenu }: SideBarProps) {
  const { data } = useGetLessonsQuery()

  return (
    <aside className={classNames("w-[348px] bg-gray-700 p-6 border-l border-gray-600 lg:flex-col ", {
      'lg:flex lg:absolute lg:right-0 lg:w-full lg:h-full z-50 overflow-hidden': isMenuOpen,
      'lg:hidden': !isMenuOpen
    })}>
      <span className="font-bold text-2xl pb-6 mb-6 border-b border-gray-500 block">
        Cronograma de aulas
      </span>
      
      <div className="flex flex-col gap-8">
        {data?.lessons.map(lesson => {
          return (
            <Lesson
              key={lesson.id}
              title={lesson.title}
              availableAt={new Date(lesson.availableAt)}
              slug={lesson.slug}
              type={lesson.lessonType}
              handleMenu={handleMenu}
            />
          )
        })}
      </div>
    </aside>
  )
}
