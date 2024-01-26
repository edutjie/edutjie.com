import { Button, Card } from '@elements'
import React, { useState } from 'react'
import { ACHIEVEMENTS } from '@constants'

const Achievements = () => {
  const goldCount = ACHIEVEMENTS.filter(
    (achievement) => achievement.medal === 'gold'
  ).length
  const silverCount = ACHIEVEMENTS.filter(
    (achievement) => achievement.medal === 'silver'
  ).length
  const bronzeCount = ACHIEVEMENTS.filter(
    (achievement) => achievement.medal === 'bronze'
  ).length
  const [currAchievements, setCurrAchievements] = useState(
    ACHIEVEMENTS.slice(0, 4)
  )
  const loadMoreAchievements = () => {
    setCurrAchievements(ACHIEVEMENTS.slice(0, currAchievements.length + 4))
  }
  return (
    <div
      id="achievements"
      className="flex flex-col md:min-h-screen items-center justify-center gap-6 z-10 py-20 md:py-40"
    >
      <div className="flex flex-col gap-2 items-center">
        <h1>
          My <span className="text-[#95F9C3]">Achievements</span>
        </h1>
        <div className="flex gap-3 text-lg md:text-xl">
          {goldCount > 0 && (
            <div className="flex gap-1 items-center">
              <span>🥇</span>
              <p>{goldCount}</p>
            </div>
          )}
          {silverCount > 0 && (
            <div className="flex gap-1 items-center">
              <span>🥈</span>
              <p>{silverCount}</p>
            </div>
          )}
          {bronzeCount > 0 && (
            <div className="flex gap-1 items-center">
              <span>🥉</span>
              <p>{bronzeCount}</p>
            </div>
          )}
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-[50px] z-10">
        {currAchievements.map((achievement, index) => (
          <Card variant={2} key={index} props={achievement} />
        ))}
      </div>
      {ACHIEVEMENTS.length > 4 &&
        ACHIEVEMENTS.length > currAchievements.length && (
          <Button onClick={loadMoreAchievements} className="w-fit mx-auto z-10">
            Load More
          </Button>
        )}
    </div>
  )
}

export default Achievements
