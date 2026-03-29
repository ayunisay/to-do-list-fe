import { Box, Flex, Text } from "@radix-ui/themes";

function LeftMenu() {
    return (
        <>
        {/* left menu */}
            <Box className="bg-red-500 col-span-2">
              <Flex direction='column' pt='4'>
                {/* title menu */}
                <Box pl='3'>
                  <Flex align='center' gap='2'>
                    <img src="./public/img/icon.png" alt="icon" width="40" height="40" />
                    <Text size='6' weight='bold' className='text-white'>
                      Taskly
                    </Text>
                  </Flex>
                </Box>
                {/* menu */}
                <Box pt='4'>
                  <Flex direction='column' gap='2' className='text-white'>
                    <nav className='bg-gray-500 pl-3 py-2'>
                      <a href="#">Overview</a>
                    </nav>
                    <nav className='bg-gray-500 pl-3 py-2'>
                      <a href="#">Hari Ini</a>
                    </nav>
                    <nav className='bg-gray-500 pl-3 py-2'>
                      <a href="#">Mendatang</a>
                    </nav>
                    <nav className='bg-gray-500 pl-3 py-2'>
                      <a href="#">Semua Task</a>
                    </nav>
                  </Flex>
                </Box>
                {/* proyek */}
                <Box pt='4' pl='3'>
                  <Flex direction='column' gap='2' className='text-white'>
                    <Box py='2'>
                      <Text size='3' weight='medium'>
                        Proyek
                      </Text>
                    </Box>
                    <Box className='bg-gray-500' py='2'>
                      <Text>Kuliah</Text>
                    </Box>
                    <Box className='bg-gray-500' py='2'>
                      <Text>Pekerjaan</Text>
                    </Box>
                    <Box className='bg-gray-500' py='2'>
                      <Text>Personal</Text>
                    </Box>
                  </Flex>
                </Box>
              </Flex>
            </Box>
        </>
    )
}
export default LeftMenu;
