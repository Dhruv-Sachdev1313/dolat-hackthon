cmake_minimum_required(VERSION 3.2.0)
project(backend VERSION 0.1.0)

include(CTest)
enable_testing()

set(CMAKE_CXX_STANDARD 17)

set(CMAKE_CXX_FLAGS "${CMAKE_CXX_FLAGS}")

add_subdirectory(dependencies/cpp_redis)

include_directories(/usr/local/homebrew/Cellar/boost/1.78.0_1/include)
link_directories(/usr/local/homebrew/lib)
include_directories(${CMAKE_CURRENT_SOURCE_DIR}/dependencies/Crow/include)
include_directories(${CMAKE_CURRENT_SOURCE_DIR}/dependencies/cpp_redis/includes)

add_executable(backend main.cpp)

target_link_libraries(backend boost_system)
target_link_libraries(backend pthread)
target_link_libraries(backend cpp_redis)

set(CPACK_PROJECT_NAME ${PROJECT_NAME})
set(CPACK_PROJECT_VERSION ${PROJECT_VERSION})
include(CPack)