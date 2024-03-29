import styled from "styled-components";

export const Container = styled.div``;

export const CustomButton = styled.button`
  display: flex;
  width: max(150px, 15vw);
  height: max(30px, 3vw);
  padding: max(17px, 1.5vw);
  font-size: max(11px, 0.8vw);
  align-items: center;
  justify-content: center;
  border: 2px solid #eec643;
  background-color: transparent;
  letter-spacing: 0.8px;
  font-weight: 500;
  text-transform: uppercase;
  font-family: ${({ theme }) => theme.FONTS.RUBIK};
  color: ${({ theme }) => theme.COLORS.SECONDARY};

  background: linear-gradient(to left, transparent 50%, #eec643 50%) right;
  background-size: 200%;
  transition: 0.6s ease-out;

  &:hover {
    background-position: left;
    cursor: pointer;
    color: ${({ theme }) => theme.COLORS.TERTIARY};
  }
`;
export const CardButton = styled.button`
  display: flex;
  width: max(140px, 3.5vw);
  height: max(20px, 2.5vw);
  padding: max(17px, 1vw);
  font-size: max(13px, 0.8vw);
  align-items: center;
  justify-content: center;
  border: 2px solid #eec643;
  background-color: transparent;
  border-radius: 5px;
  font-family: ${({ theme }) => theme.FONTS.RUBIK};
  color: ${({ theme }) => theme.COLORS.SECONDARY};
  transition: all 0.4s ease-in;

  &:hover {
    cursor: pointer;
    transform: translateY(-3px);
    color: ${({ theme }) => theme.COLORS.PRIMARY};
    background-color: ${({ theme }) => theme.COLORS.SECONDARY};
  }
`;
