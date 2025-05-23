export const BASE_CLASS = `sui-MoleculeBadgeCounter`
export const CLASS_WITH_CHILDREN = `${BASE_CLASS}--withChildren`

export const CLASS_BULLET = `${BASE_CLASS}-bullet`
export const CLASS_BULLET_WITH_CHILDREN = `${CLASS_BULLET}--withChildren`

export const CLASS_SMALL = `${CLASS_BULLET}-small`
export const CLASS_MEDIUM = `${CLASS_BULLET}-medium`
export const CLASS_LARGE = `${CLASS_BULLET}-large`

export const CLASS_DISABLED = 'is-disabled'
export const CLASS_SELECTED = 'is-selected'

export const CLASS_MEDIUM_THREE_CHARS = `${CLASS_MEDIUM}--threeCharacters`
export const CLASS_LARGE_THREE_CHARS = `${CLASS_LARGE}--threeCharacters`

export const SIZES = {
  SMALL: 'small',
  MEDIUM: 'medium',
  LARGE: 'large'
}

export const STATUS = {
  DEFAULT: 'default',
  DISABLED: 'disabled',
  SELECTED: 'selected'
}

export const VARIANTS = {
  DOT: 'dot',
  EXCLAMATION: 'exclamation',
  EXTENDED: 'extended'
}

export const MAX_LABEL = 99

export const getClassSize = ({size, hasLabel}) => {
  if (size !== SIZES.SMALL) {
    return {
      [SIZES.MEDIUM]: CLASS_MEDIUM,
      [SIZES.LARGE]: CLASS_LARGE
    }[size]
  } else if (hasLabel && size === SIZES.SMALL) {
    return CLASS_MEDIUM
  }
  return CLASS_SMALL
}

export const getClassLengthLabel = ({hasLabel, label, size}) => {
  if (!hasLabel || (label + '').length < 3) return ''

  if (size === SIZES.MEDIUM) return CLASS_MEDIUM_THREE_CHARS
  return CLASS_LARGE_THREE_CHARS
}
