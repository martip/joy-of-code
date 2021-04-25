import { Box } from '@chakra-ui/react'
import { motion } from 'framer-motion'

import { CustomLink } from '@/root/components/shared/CustomLink'
import { Tilt } from '@/root/components/shared/Tilt'
import { Icon } from '@/root/components/shared/Icon'
import { cardTheme } from '@/root/styles/card'
import { fadeIn } from '@/root/utils/helpers/variants'
import { playSound } from '@/root/utils/helpers/playSound'

interface Props {
  theme: string
  title: string
  slug: string
}

export function Card({ theme, title, slug }: Props) {
  return (
    <CustomLink href={`/${encodeURIComponent(slug)}`} isInternal>
      <Tilt>
        <motion.div variants={fadeIn}>
          <Box
            onClick={() => playSound('page')}
            position="relative"
            h={['200px', '240px']}
            borderRadius="lg"
            boxShadow="lg"
            overflow="hidden"
            _hover={{
              boxShadow: '2xl',
            }}
          >
            <Box
              h="100%"
              bg={`${cardTheme[theme].bg}, url('/images/nebula.webp')`}
              bgPos="0 20%"
              bgBlendMode="color"
            ></Box>
            <Box
              position="absolute"
              top={4}
              right={4}
              color={cardTheme[theme].color}
              zIndex="2"
            >
              <Icon icon={cardTheme[theme].icon} />
            </Box>
            <Box
              as="span"
              maxW="80%"
              position="absolute"
              bottom={4}
              left={4}
              fontSize={['3xl', '4xl']}
              fontWeight="bold"
              lineHeight="1"
              color={cardTheme[theme].color}
              letterSpacing="-2px"
              zIndex="2"
              textShadow={`2px 2px hsla(0, 0%, 0%, 100%)`}
            >
              {title}
            </Box>
          </Box>
        </motion.div>
      </Tilt>
    </CustomLink>
  )
}
