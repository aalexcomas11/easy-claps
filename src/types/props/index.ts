export type paddingSizes = 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'xxl' | 'xxxl' | 'xxxxl'

export interface Padding{
  left?: paddingSizes,
  right?: paddingSizes,
  top?: paddingSizes,
  bottom?: paddingSizes, 
}

export type marginSizes = 'xs' | 'sm' | 'md' | 'lg'

export interface Margin{
  left?: marginSizes | number,
  right?: marginSizes | number,
  top?: marginSizes | number,
  bottom?: marginSizes | number, 
}

export type Colors ='primary' | 'secondary' | 'accent' | 'white' | 'light-grey' | 'grey' | 'dark-grey' | 'darker-grey'