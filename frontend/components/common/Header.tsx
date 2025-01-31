import { Button, Space } from 'antd'
import React from 'react'
import { useRecoilState } from 'recoil'
import styled from 'styled-components'
import { zIndexConfig } from '../../config'
import {
  DAY_BG_COLOR,
  DAY_FONT_COLOR,
  NIGHT_BG_COLOR,
  NIGHT_FONT_COLOR
} from '../../config/day-night-mode'
import { isDayState } from '../../recoil/day-night'

type ContainerProps = {
  isDay: boolean
}
const Container = styled.div<ContainerProps>`
  display: flex;
  width: 100%;
  height: 60px;
  z-index: ${zIndexConfig.header};
  background-color: ${(props) => (props.isDay ? DAY_BG_COLOR : NIGHT_BG_COLOR)};
  color: ${(props) => (props.isDay ? DAY_FONT_COLOR : NIGHT_FONT_COLOR)};
  box-shadow: ${(props) =>
    props.isDay
      ? '0px 1px 6px rgba(0, 0, 0, 0.1)'
      : '0px 1px 6px rgba(255, 255, 255, 0.1)'};

  transition: background-color 200ms ease, color 200ms ease,
    box-shadow 200ms ease;

  .header-title {
    display: flex;
    height: 100%;
    font-size: 24px;
    font-weight: 600;

    justify-content: center;
    align-items: center;
  }
`

type DayNightButtonProps = {
  isDay: boolean
}

const DayNightButton = styled.div<DayNightButtonProps>`
  display: flex;
  width: 30px;
  height: 30px;
  border-radius: 50%;
  cursor: pointer;

  &:hover {
    transform: scale(1.1);
  }
`

type Props = {
  prop?: string
}
const Header: React.FC<Props> = ({ prop }) => {
  const [isDay, setIsDay] = useRecoilState<boolean>(isDayState)
  const addNewBook = () => {
    console.log('새로 넣자!')
  }

  const toggleDayNight = () => {
    console.log(isDay ? '아침이네' : '밤이네')
    setIsDay(!isDay)
  }
  return (
    <Container isDay={isDay}>
      <Space
        direction="horizontal"
        style={{
          width: '100%',
          justifyContent: 'space-between',
          padding: '0px 20px'
        }}
      >
        <div className="header-title">WithBook</div>
        <DayNightButton isDay={isDay} onClick={() => toggleDayNight()}>
          {isDay ? (
            <img width="30px" src="/image/moon.png" />
          ) : (
            <img width="30px" src="/image/sun.png" />
          )}
        </DayNightButton>
        <Button onClick={() => addNewBook()}>새 책 추가하기</Button>
      </Space>
    </Container>
  )
}
export default Header
